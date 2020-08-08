import React from "react";
import whatsapp from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface teacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post("connections", {
      user_id: teacher.id,
    });
  };
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora <strong>R${teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.avatar}`}
          type="button"
        >
          <img src={whatsapp} alt="" /> Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
