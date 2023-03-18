"use client";
import CounterCard from "./components/CounterCard/CounterCard";
import History from "./components/History/History";
import { useReducer } from "react";
import { CountActionKind, CountState, reducer } from "./reducers/reducer";

export default function Home() {
  const initialState: CountState = { count: 0, history: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <header className="bg-gray-100 p-6"></header>
      <section className="md:flex mt-5 gap-10 mx-10">
        <CounterCard dispatch={dispatch} count={state.count} />
        <History history={state.history} />
        <div
          className="absolute bottom-6 right-6 bg-blue-300 px-16 py-2 cursor-pointer"
          onClick={() => dispatch({ type: CountActionKind.CLEAR, payload: 0 })}
        >
          Clear
        </div>
      </section>
    </main>
  );
}
