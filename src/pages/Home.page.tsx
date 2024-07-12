import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import PreflopChart from "@/components/PreflopChart";
import {Center} from "@mantine/core";

export function HomePage() {
  return (
    <Center>
      <PreflopChart />
    </Center>
  );
}
