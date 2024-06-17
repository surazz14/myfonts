
import DashboardDetail from "../../../Components/dashboard-detail";
import { Box } from "@mui/material";


export default function DetailPage({params}) {
  const { id } = params;
  return (
    <Box sx={{marginRight:20,marginLeft:20}}>
      <DashboardDetail id={id} />
    </Box>
  );
}