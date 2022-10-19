export default class Message {
    author: string;
    content: string;
    isComment: boolean;
    isInputInfo: boolean;
    
    constructor(author: string, content: string, isComment: boolean = false, isInputInfo: boolean = false) {
        this.author = author;
        this.content = content;
        this.isComment = isComment;
        this.isInputInfo = isInputInfo;
    }


}