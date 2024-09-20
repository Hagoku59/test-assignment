import { React, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { addTransaction } from "../store/transactionActions";
import { DatePicker,Button, Col, Row, Input, InputNumber, Select } from "antd";
import "./TransactionForm.css";

const TransactionForm = () => {
    const [date, setDate] = useState(null);
    const [sum, setSum] = useState(null);
    const [category, setCategory] = useState(null);
    const [comment, setComment] = useState(null);
    const author = "Test Author";

    const dispatch = useDispatch();

    const addTransactionHandler = (data) => {
        dispatch(addTransaction(data));
    };

    const onChangeDate = (date, dateString) => {
        const dateFormated = moment( new Date(date)).format("YYYY-MM-DD HH:mm:ss");
        setDate(dateFormated);
    };

    const onChangeComment = (e) => {
        setComment(e.target.value);
    };

    const onChangeSum = (value) => {
        setSum(value);
    };

    const onChangeCategory = (value) => {
        setCategory(value);
    };

    const sendForm = () => {
        const data = {date, sum, category, comment, author};
        addTransactionHandler(data);
    };

    const { TextArea } = Input;

    return (
        <div className="mainForm">
            <p className="formMainTitle">Форма расходов</p>
            <Row>
                <Col span={8}>
                        <Row className="formRow">
                            <Col span={8}>
                            <p className="formTitle">Дата:</p>
                            </Col>
                            <Col span={16}>
                                <DatePicker
                                    size="small" 
                                    style={{ width: "100%", height: "30px"}}
                                    placeholder="Выберите дату"
                                    onChange = {onChangeDate}
                                />
                            </Col>
                        </Row>

                        <Row className="formRow">
                            <Col span={8}>
                                <p className="formTitle">Сумма:</p>
                            </Col>
                            <Col span={8}>
                                <InputNumber
                                    style={{ width: "100%"}}
                                    value={sum}
                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    onChange={onChangeSum}
                                    placeholder="Введите сумму"
                                />
                            </Col>
                        </Row>

                        <Row className="formRow">
                            <Col span={8}>
                                <p className="formTitle">Категория:</p>
                            </Col>
                            <Col span={16}>
                                <Select 
                                    placeholder="Выберите категорию"
                                    onChange={onChangeCategory}
                                    style={{width: "100%"}}
                                    options={[
                                    { value: 'Транспорт', label: 'Транспорт' },
                                    { value: 'Питание', label: 'Питание' },
                                    { value: 'Техника', label: 'Техника' }
                                ]}/>
                            </Col>
                        </Row>

                        <Row className="formRow">
                            <Col span={8}>
                            <p className="formTitle">Комментарий:</p>
                            </Col>
                            <Col span={16}>
                                <TextArea rows={4} onChange={onChangeComment}/>
                            </Col>
                        </Row>

                        <Row className="formButtonRow" type="flex" style={{alignItems: 'center'}}>
                            <Col span={24}>
                                <Button style={{width: "100px", backgroundColor: "#3D52A0"}} onClick={sendForm} type="primary" >Отправить</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </div>
    );

};

export default TransactionForm;