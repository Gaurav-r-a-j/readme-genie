import { StatusWrapper } from '@/components/common/status-wrapper';
import { FormDataType } from '@/components/forms/readme-form';
import React, { Suspense, lazy } from 'react';

const ReadmeForm = lazy(() => import('@/components/forms/readme-form'));
const ReadmePreview = lazy(() => import('@/components/custom/readme-preview'));

const LoadingSpinner = () => (
  <StatusWrapper
    status="loading"
    message="Loading component..."
    compact
    className="p-8 justify-center"
  />
);

type MainContentProps = {
  formData: FormDataType;
  setFormData: (
    data: FormDataType | ((prev: FormDataType) => FormDataType)
  ) => void;
};

const MainContent: React.FC<MainContentProps> = ({ formData, setFormData }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
    <div className="space-y-6">
      <Suspense fallback={<LoadingSpinner />}>
        <ReadmeForm formData={formData} setFormData={setFormData} />
      </Suspense>
    </div>
    <div className="xl:sticky xl:top-6 self-start">
      <Suspense fallback={<LoadingSpinner />}>
        <ReadmePreview formData={formData} />
      </Suspense>
    </div>
  </div>
);

export default MainContent;
