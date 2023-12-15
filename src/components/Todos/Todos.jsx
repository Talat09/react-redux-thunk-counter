import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { getAllTodos } from "../../Services/actions/todosAction";

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state);
  console.log(todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center  mt-8 font-bold text-sky-800">
        Todos App
      </h1>
      {isLoading && <Loading />}
      {error && <p>error:{error.message}</p>}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 my-16 mx-4">
        {todos &&
          todos.map((todo, id) => {
            return (
              <article
                key={id}
                className="bg-sky-800 w-full h-40 flex flex-col justify-center items-center rounded-md p-4"
              >
                <h4 className="text-center text-2xl text-white">{todo.id}</h4>
                <h4 className="text-center text-2xl text-white">
                  {todo.title}
                </h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
