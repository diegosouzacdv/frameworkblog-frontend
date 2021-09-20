export class Comentario {
    id: number = 0;
    descricao: string = '';
    postId: string = '';
    dataHoraPublicacao: Date = new Date();
    usuarioId: number = 0;
    nomeUsuario: string = '';
    fotoId: number = 0;
    action:string = "";
}