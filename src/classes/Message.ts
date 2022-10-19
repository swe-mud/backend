export default class Message {
    author: string;
    content: string;
    isComment: boolean;
    isInputInfo: boolean;
    
    constructor(author: string, content: string, isComment: boolean = false) {
        this.author = author;
        this.content = content;
        this.isComment = isComment;
    }


}