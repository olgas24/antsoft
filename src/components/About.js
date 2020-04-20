import React from "react";

export const AboutComponent = () => {

    return (
        <div className="about">
            <h3>Услуг</h3>
            <div className="services">
                <div className="parent first">
                    <div>
                        Ручное бронирование
                    </div>
                    <div>
                        11
                    </div>
                </div>
                <div className="parent second">
                    <div>
                        <p>Пакетные туры</p>
                    </div>
                    <div>
                        3
                    </div>
                </div>
                <div className="parent third">
                    <div>
                        <p>Отели</p>
                    </div>
                    <div>
                        1
                    </div>
                </div>
            </div>
            <div className="total">
                <div>Всего</div>
                <div>15</div>
            </div>
        </div>
    );
};