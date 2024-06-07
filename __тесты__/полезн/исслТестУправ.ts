import запрос = require("supertest"); // костыль от "can only be default-imported using the 'esModuleInterop' flag"
import {пр, ПутиМарш} from "../../ист/прил";
import {МодСоздИссл} from "../../ист/особенности/исследователи/модели/МодСоздИссл";

const Путь = decodeURI(ПутиМарш.исследователи);

export const исслТестУправ = {
    async добИссл(д: МодСоздИссл, ожидСтатусКод: number = 201) {
        const ответ = await запрос(пр).post(Путь).send(д).expect(ожидСтатусКод);

        if(ожидСтатусКод === 201) expect(ответ.body).toEqual({
            ид: expect.any(Number),
            имя: д.имя
        });
    }
};
