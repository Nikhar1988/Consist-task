import { Table } from 'antd';

const Report  = () => {
const dataTodo = [
    { key: 1, title : "delectus aut autem", completed : 'done'},
    { key: 2, title : "quis ut nam facilis et officia qui", completed : 'not done'},
    { key: 3, title : "fugiat veniam minus", completed : 'done'},
    { key: 4, title : "et porro tempora", completed : 'not done'},
    { key: 5, title : "laboriosam mollitia et enim quasi adipisci quia provident illum", completed : 'not done'},
    { key: 6, title : "qui ullam ratione quibusdam voluptatem quia omnis", completed : 'done'},
    { key: 7, title : "illo expedita consequatur quia in", completed : 'not done'},
    { key: 8, title : "vero rerum temporibus dolor", completed : 'not done'},
    { key: 9, title : "fugiat veniam minus", completed : 'not done'},
    { key: 10, title : "delectus aut autem", completed : 'true'},
    { key: 11, title : "quis ut nam facilis et officia qui", completed : 'not done'},
    { key: 12, title : "fugiat veniam minus", completed : 'done'},
    { key: 13, title : "et porro tempora", completed : 'not done'},
    { key: 14, title : "laboriosam mollitia et enim quasi adipisci quia provident illum", completed : 'done'},
    { key: 15, title : "qui ullam ratione quibusdam voluptatem quia omnis", completed : 'not done'},
    { key: 16, title : "illo expedita consequatur quia in", completed : 'not done'},
    { key: 17, title : "vero rerum temporibus dolor", completed : 'done'},
    { key: 18, title : "fugiat veniam minus", completed : 'not done'}
];
    

    return (
         
        <>
            <h1 style={{textAlign: "center"}}>Список задач</h1>
            <Table dataSource={dataTodo}>
                <Table.Column title="№" dataIndex="key" key="key" />
                <Table.Column title="Title" dataIndex="title" key="key" />
                <Table.Column title="Status" dataIndex="completed" key="key"/>
            </Table>  
        </>  
    );
};


export default Report;