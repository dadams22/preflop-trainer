import PreflopChart from "@/components/PreflopChart/PreflopChart";
import {Center, Group, Stack} from "@mantine/core";
import ConfigurationControls from "@/components/ConfigurationControls/ConfigurationControls";

export function HomePage() {
  return (
    <Center mih="100vh">
        <Group align="flex-start">
            <ConfigurationControls />
            <PreflopChart />
        </Group>
    </Center>
  );
}
