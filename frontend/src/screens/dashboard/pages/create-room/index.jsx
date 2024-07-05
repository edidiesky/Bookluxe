import DashboardIndex from "./components";
import Meta from "@/components/common/Meta";
export default function Home() {
  return (
    <div>
      <Meta title={"Dashboard - Create your Room"} />
      <DashboardIndex />
    </div>
  );
}
