import { StatusWrapper } from '@/components/common/status-wrapper';
import { FormDataType } from '@/types/readme-form';
import React, { Suspense, lazy, useState } from 'react';

const StepperFormNew = lazy(
  () => import('@/components/forms/readme/stepper-form-new')
);
const ReadmeGeneratorView = lazy(
  () => import('@/components/readme/readme-generator-view')
);

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

const MainContent: React.FC<MainContentProps> = ({ formData, setFormData }) => {
  const [showReadmePreview, setShowReadmePreview] = useState(false);

  const handleGenerateReadme = () => {
    setShowReadmePreview(true);
  };

  const handleBackToForm = () => {
    setShowReadmePreview(false);
  };

  if (showReadmePreview) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ReadmeGeneratorView formData={formData} onBack={handleBackToForm} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <StepperFormNew
        formData={formData}
        setFormData={setFormData}
        onGenerateReadme={handleGenerateReadme}
      />
    </Suspense>
  );
};

export default MainContent;
