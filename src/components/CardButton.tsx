import { ButtonBase, Box, Typography } from "@mui/material";

interface CardButtonProps {
  img: string;
  title: string;
  onClick: () => void;
  selected?: boolean;
}

export default function CardButton({ img, title, onClick, selected }: CardButtonProps) {
  return (
    <ButtonBase sx={{ width: "100%" }} onClick={onClick}>
      <Box
        sx={{
          backgroundColor: selected ? "#62C98E" : "#80808026",
          maxHeight: 150,
          maxWidth: 200,
          height: "90%",
          width: "90%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: selected ? "#62C98E" : "#80808050",
          },
        }}
      >
        <img src={img} alt="ETH" width={50} height={50} />
        <Typography variant="h3" fontSize={16} fontWeight="600">
          {title}
        </Typography>
      </Box>
    </ButtonBase>
  );
}
