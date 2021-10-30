import { Table } from 'antd';

const Report  = () => {
const dataTodo = [
    { id: 1, title : "delectus aut autem", completed : 'done'},
    { id: 2, title : "quis ut nam facilis et officia qui", completed : 'not done'},
    { id: 3, title : "fugiat veniam minus", completed : 'done'},
    { id: 4, title : "et porro tempora", completed : 'not done'},
    { id: 5, title : "laboriosam mollitia et enim quasi adipisci quia provident illum", completed : 'not done'},
    { id: 6, title : "qui ullam ratione quibusdam voluptatem quia omnis", completed : 'done'},
    { id: 7, title : "illo expedita consequatur quia in", completed : 'not done'},
    { id: 8, title : "vero rerum temporibus dolor", completed : 'not done'},
    { id: 9, title : "fugiat veniam minus", completed : 'not done'},
    { id: 10, title : "delectus aut autem", completed : 'true'},
    { id: 11, title : "quis ut nam facilis et officia qui", completed : 'not done'},
    { id: 12, title : "fugiat veniam minus", completed : 'done'},
    { id: 13, title : "et porro tempora", completed : 'not done'},
    { id: 14, title : "laboriosam mollitia et enim quasi adipisci quia provident illum", completed : 'done'},
    { id: 15, title : "qui ullam ratione quibusdam voluptatem quia omnis", completed : 'not done'},
    { id: 16, title : "illo expedita consequatur quia in", completed : 'not done'},
    { id: 17, title : "vero rerum temporibus dolor", completed : 'done'},
    { id: 18, title : "fugiat veniam minus", completed : 'not done'}
];


    return (
        <div>
            <h1 style={{textAlign: "center"}}>Table of Tasks</h1>
            <Table dataSource={dataTodo}>
                <Table.Column title="№" dataIndex="id" key="key" />
                <Table.Column title="Title" dataIndex="title" key="key" />
                <Table.Column title="Status" dataIndex="completed" key="key" />
            </Table>  
        </div>  
    );
};


export default Report;