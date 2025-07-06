import { PageWrapper } from '@/components/common/page-wrapper';
import {
  HeroSection,
  InstructionsSection,
  MainContent,
} from '@/containers/home';
import TrustSection from '@/containers/home/trust-section';
import { useHomeFormData } from '../../hooks/use-form-data';

const HomePage = () => {
  const { formData, setFormData } = useHomeFormData();

  return (
    <PageWrapper className="w-full container">
      <HeroSection />
      <TrustSection />
      <MainContent formData={formData} setFormData={setFormData} />
      <InstructionsSection />
    </PageWrapper>
  );
};

export default HomePage;
