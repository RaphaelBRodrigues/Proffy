import React, { useState, FormEvent } from "react";
import PageHeader from "../../../components/PageHeader";
import TeacherItem from "../../../components/TeacherItem";
import "./styles.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import api from "../../../services/api";
import {Teacher} from '../../../components/TeacherItem'



export default () => {
  const [teacher, setTeacher] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeacher(response.data);

    console.log("asdsda");
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teacher" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "História", label: "História" },
              { value: "Química", label: "Química" },
              { value: "Física", label: "Física" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            label="Hora"
            type="time"
          />
          <button onClick={searchTeachers} type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {teacher.map((teacher:Teacher,i) => {
          return <TeacherItem key={teacher.id}
              teacher={teacher}
          />;
        })}
      </main>
    </div>
  );
};
