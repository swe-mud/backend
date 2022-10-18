export default class Message {
    author: string;
    content: string;
    isComment: boolean;
    
    constructor(author: string, content: string, isComment: boolean) {
        this.author = author;
        this.content = content;
        this.isComment = isComment;
    }
}