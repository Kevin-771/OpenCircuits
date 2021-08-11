import {DEFAULT_FILL_COLOR,
        DEFAULT_BORDER_COLOR,
        SELECTED_FILL_COLOR,
        SELECTED_BORDER_COLOR,
        IO_PORT_LINE_WIDTH,
        IO_PORT_RADIUS,
        IO_PORT_BORDER_WIDTH} from "core/utils/Constants";

import {Renderer} from "core/rendering/Renderer";
import {Port} from "core/models/ports/Port";

import {Circle} from "core/rendering/shapes/Circle";
import {Line} from "core/rendering/shapes/Line";
import {Style} from "core/rendering/Style";
import {Polygon} from "core/rendering/shapes/Polygon";

export const IOPortRenderer = (() => {
    return {
        renderPort(renderer: Renderer, port: Port, selected: boolean, portSelected: boolean): void {
            const o = port.getOriginPos();
            const v = port.getTargetPos();

            const lineCol = (selected && !portSelected ? SELECTED_BORDER_COLOR : DEFAULT_BORDER_COLOR);
            const lineStyle = new Style(undefined, lineCol, IO_PORT_LINE_WIDTH);

            renderer.draw(new Line(o, v), lineStyle);

            const borderCol = (selected || portSelected ? SELECTED_BORDER_COLOR : DEFAULT_BORDER_COLOR);
            const circleFillCol = (selected || portSelected ? SELECTED_FILL_COLOR : DEFAULT_FILL_COLOR);
            const circleStyle = new Style(circleFillCol, borderCol, IO_PORT_BORDER_WIDTH)
            if(port.getNotted()){
                // draw special not symbol
                //renderer.draw(new Polygon((Array(...))v, IO_PORT_RADIUS/3), lineStyle);
                renderer.draw(new Circle(v, IO_PORT_RADIUS/3), circleStyle);
                //renderer.draw(new Polygon([v]), circleStyle);
                console.log("ping!");
            }else{
                renderer.draw(new Circle(v, IO_PORT_RADIUS), circleStyle);
            }
        }
    };
})();
