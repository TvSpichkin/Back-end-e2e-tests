import запрос = require("supertest"); // костыль от "can only be default-imported using the 'esModuleInterop' flag"
import {пр, ПутиМарш} from "../../ист/прил";
import {МодСоздЧаст} from "../../ист/особенности/частицы/модели/МодСоздЧаст";

const Путь = decodeURI(ПутиМарш.частицы);

export function создЧаст(ид: number, название: string) {
    if(ид) return {ид: ид, название: название};
    else return {название: название};
}

export const частТестУправ = {
    async добЧаст(д: МодСоздЧаст, ожидСтатусКод: number = 201) {
        const ответ = await запрос(пр).post(Путь).send(д).expect(ожидСтатусКод);

        if(ожидСтатусКод === 201) expect(ответ.body).toEqual({
            ид: expect.any(Number),
            название: д.название
        });
    }
};
