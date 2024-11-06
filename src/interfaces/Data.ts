export default interface Data {
    _id:       ID;
    title:     string;
    access:    string;
    questions: Question[];
    version:   number;
    createdAt: AtedAt;
    updatedAt: AtedAt;
    __v:       number;
  }
  
  export interface ID {
    $oid: string;
  }
  
  export interface AtedAt {
    $date: Date;
  }
  
  export interface Question {
    type:    string;
    title:   string;
    options: string[];
    _id:     ID;
  }
  