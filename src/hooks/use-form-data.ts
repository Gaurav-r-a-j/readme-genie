import { ReadmeFormData } from '@/types/readme-form';
import { useCallback, useMemo, useState } from 'react';

const createDefaultFormData = (): ReadmeFormData => ({
  name: '',
  title: '',
  about: '',
  location: '',
  portfolio: '',
  currentWork: '',
  skills: [],
  education: '',
  funFact: '',
  github: '',
  twitter: '',
  linkedin: '',
  email: '',
  instagram: '',
  facebook: '',
  codepen: '',
  dribbble: '',
  stackoverflow: '',
  youtube: '',
  dev: '',
  medium: '',
  buymeacoffee: '',
  kofi: '',
  showStats: true,
  showVisitors: false,
  showTrophies: false,
  showStreak: true,
  darkMode: false,
  bannerColor: '#0366d6',
  layoutStyle: 'standard',
});

export function useHomeFormData() {
  const [formData, setFormData] = useState<ReadmeFormData>(() => {
    try {
      const savedData = localStorage.getItem('readmeFormData');
      return savedData
        ? { ...createDefaultFormData(), ...JSON.parse(savedData) }
        : createDefaultFormData();
    } catch (error) {
      console.error('Error loading saved data:', error);
      return createDefaultFormData();
    }
  });

  // Debounced save to localStorage
  const saveToLocalStorage = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    return (data: ReadmeFormData) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        try {
          localStorage.setItem('readmeFormData', JSON.stringify(data));
        } catch (error) {
          console.error('Error saving data:', error);
        }
      }, 500);
    };
  }, []);

  // Memoized setFormData to prevent unnecessary re-renders
  const handleFormDataChange = useCallback(
    (data: ReadmeFormData | ((prev: ReadmeFormData) => ReadmeFormData)) => {
      setFormData(prevData => {
        const newData = typeof data === 'function' ? data(prevData) : data;
        saveToLocalStorage(newData);
        return newData;
      });
    },
    [saveToLocalStorage]
  );

  return { formData, setFormData: handleFormDataChange };
}
