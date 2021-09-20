import { ImagemPost } from "./imagemPost";
import { Link } from "./link";

export class Post {
    id: number = 0;
    descricao: string = '';
    action: string = '';
    categoriaId: number = 0;
    categoriaNome: string = '';
    totalComentarios: number = 0;
    tipoPostagem: number = 0;
    totalCurtidas: number = 0;
    visualizacoes: number = 0;
    dataHoraPublicacao: Date = new Date;
    imagens: ImagemPost[] = [];
    links: Link[] = [];
    titulo: string = '';
    usuarioId: number = 0;
    usuarioNome: string = '';
}