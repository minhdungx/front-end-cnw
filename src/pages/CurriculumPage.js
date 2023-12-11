import Curriculum from "../components/Curriculum";
import { CurriculumContextProvider } from "../context/CurriculumContext";

export default function CurriculumPage() {
  return (
    <CurriculumContextProvider>
      <Curriculum />
    </CurriculumContextProvider>
  );
}
