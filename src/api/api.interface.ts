export interface Image {
  type:            string;
  id:              number;
  title:           string;
  price:           number;
  author:          string;
  created_at:      string
  likes_count:     number;
  liked:           boolean;
  links:           Link[];
  main_attachment: MainAttachment
}


export interface Link {
  rel:     Rel;
  uri:     string;
  methods: Methods;
}

export type Methods = "GET" | "POST";

export type Rel = "avatar" | "like";

export interface MainAttachment {
  big:   string;
  small: string;
}
