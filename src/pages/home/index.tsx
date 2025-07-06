import { ContainerWrapper } from '@/components/common';
import { PageWrapper } from '@/components/common/page-wrapper';
import {
  HeroSection,
  InstructionsSection,
  MainContent,
} from '@/containers/home';
import { useHomeFormData } from '../../hooks/use-form-data';

const HomePage = () => {
  const { formData, setFormData } = useHomeFormData();

  return (
    <ContainerWrapper>
      <PageWrapper className="w-full">
        <HeroSection />
        <MainContent formData={formData} setFormData={setFormData} />
        <InstructionsSection />
      </PageWrapper>
    </ContainerWrapper>
  );
};

export default HomePage;
