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
    <PageWrapper className="w-full container">
      <HeroSection />
      <MainContent formData={formData} setFormData={setFormData} />
      <InstructionsSection />
    </PageWrapper>
  );
};

export default HomePage;
