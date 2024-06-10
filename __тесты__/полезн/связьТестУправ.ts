import запрос = require("supertest"); // костыль от "can only be default-imported using the 'esModuleInterop' flag"
import {пр, ПутиМарш} from "../../ист/прил";
import {МодСоздСвязи} from "../../ист/особенности/связьИсслЧаст/модели/МодСоздСвязи";

const Путь = decodeURI(ПутиМарш.связьИсслЧаст);

export const связьТестУправ = {
    async добСвязь(д: МодСоздСвязи, ожидСтатусКод: number = 201) {
        const ответ = await запрос(пр).post(Путь).send(д).expect(ожидСтатусКод);

        if(ожидСтатусКод === 201) expect(ответ.body).toEqual({
            идИссл: д.идИссл,
            идЧаст: д.идЧаст,
            имяИссл: expect.any(String),
            названиеЧаст: expect.any(String)
        });
    }
};
