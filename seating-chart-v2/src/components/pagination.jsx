import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// eslint-disable-next-line react/prop-types
export default function PaginationRounded({ length }) {
  return (
    <Stack spacing={2}>
      <Pagination count={length} shape="rounded" color="primary" size="large" />
    </Stack>
  );
}
