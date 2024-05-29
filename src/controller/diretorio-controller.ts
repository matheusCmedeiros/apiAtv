import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const criarDiretorio = (req: Request, res: Response) => {
    const { dirPath } = req.body;
    if (!dirPath) {
        return res.status(400).json({ message: "O caminho do diretório é obrigatório" });
    }
    fs.mkdir(path.resolve(dirPath), { recursive: true }, (err) => {
        if (err) {
            return res.status(500).json({ message: "Deu erro man" });
        }
        res.json({ message: 'Diretorio foi criado com sucesso' });
    });
};

export const listarConteudoDiretorio = (req: Request, res: Response) => {
    const dirPath = req.query.dirPath as string;
    if (!dirPath) {
        return res.status(400).json({ message: "O caminho do diretório é obrigatório" });
    }
    fs.readdir(path.resolve(dirPath), (err, files) => {
        if (err) {
            return res.status(500).json({ message: "Deu erro man, denovo" });
        }
        res.json({ files });
    });
};

export const deletarDiretorio = (req: Request, res: Response) => {
    const { dirPath } = req.body;
    if (!dirPath) {
        return res.status(400).json({ message: "O caminho do diretório é obrigatório" });
    }
    fs.rmdir(path.resolve(dirPath), { recursive: true }, (err) => {
        if (err) {
            return res.status(500).json({ message: "Vish, ta dificil" });
        }
        res.json({ message: 'Diretorio deletado com successo' });
    });
};
