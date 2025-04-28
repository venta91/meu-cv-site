import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-muted-foreground mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button onClick={() => navigate("/")}>Voltar para a página inicial</Button>
    </div>
  );
};

export default NotFound; 