import React, { useState, useEffect, FormEvent } from "react";
import PageHeader from "../../../components/PageHeader";
import "./styles.css";
import Input from "../../../components/Input";
import warningIcon from "../../images/icons/warning.svg";
import Textarea from "../../../components/Textarea";
import Select from "../../../components/Select";
import api from "../../../services/api";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  };

  const handleCreateClasses = (e: FormEvent) => {
    e.preventDefault();

    api.post("/classes",{
      name,
      avatar,
      whatsapp,
      bio,
      cost:Number(cost),
      subject,
      schedule:scheduleItems
    }).then(()=>{
      alert("fooooooi");
      history.push("/");
    }).catch(()=>{
      alert("eroooooooooooooooo");
    });

    console.log();
  };

  const setScheduleItemValue = (
    schedulePosition: number,
    field: string,
    value: string
  ) => {
    const array = scheduleItems.map((scheduleItem, index) => {
      if (schedulePosition === index) {
        return { ...scheduleItem, [field]: value };
      } else {
        return scheduleItem;
      }
    });
    setScheduleItems(array);
  };

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição!"
      />
      <main>
        <form onSubmit={handleCreateClasses}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(eve) => {
                setName(eve.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(eve) => {
                setAvatar(eve.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(eve) => {
                setWhatsapp(eve.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(eve) => {
                setBio(eve.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(ev) => {
                setSubject(ev.target.value);
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
            <Input
              name="cost"
              value={cost}
              onChange={(ev) => {
                setCost(ev.target.value);
              }}
              label="Custo da hora por aula"
            />
          </fieldset>
          <fieldset>
            <legend>
              <p>Horários disponíveis</p>
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((sche, i) => {
              return (
                <div key={i} className="schedule-item">
                  <Select
                    value={sche.week_day}
                    name="subject"
                    label="Matéria"
                    onChange={(e) => {
                      setScheduleItemValue(i, "week_day", e.target.value);
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
                    onChange={(e) => {
                      setScheduleItemValue(i, "from", e.target.value);
                    }}
                    name="from"
                    label="Das"
                    type="time"
                  />
                  <Input
                    onChange={(e) => {
                      setScheduleItemValue(i, "to", e.target.value);
                    }}
                    name="to"
                    label="Até"
                    type="time"
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="" />
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};
