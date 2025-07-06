import { StatusWrapper } from '@/components/common/status-wrapper';
import { FormDataType } from '@/types/readme-form';
import React, { Suspense, lazy } from 'react';

const ReadmeForm = lazy(() => import('@/components/forms/readme/readme-form'));
const ReadmePreview = lazy(() => import('@/components/custom/readme-preview/readme-preview'));

const LoadingSpinner = () => (
  <StatusWrapper
    status="loading"
    message="Loading component..."
    compact
    className="p-8 justify-center min-h-[300px] bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
  />
);

type MainContentProps = {
  formData: FormDataType;
  setFormData: (
    data: FormDataType | ((prev: FormDataType) => FormDataType)
  ) => void;
};

const MainContent: React.FC<MainContentProps> = ({ formData, setFormData }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-start">
    {/* Form Section */}
    <div className="space-y-6 order-2 xl:order-1">
      <Suspense fallback={<LoadingSpinner />}>
        <ReadmeForm formData={formData} setFormData={setFormData} />
      </Suspense>
    </div>

    {/* Preview Section */}
    <div className="xl:sticky xl:top-6 self-start order-1 xl:order-2">
      <Suspense fallback={<LoadingSpinner />}>
        <ReadmePreview formData={formData} />
      </Suspense>
    </div>
  </div>
);

export default MainContent;
