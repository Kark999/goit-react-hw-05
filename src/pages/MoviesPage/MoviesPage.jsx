import SearchForm from "../../components/SearchForm/SearchForm";
import { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  return (
    <div>
      <Toaster
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 3000,
          position: "top-center",
          reverseOrder: false,
          style: {
            background: "red",
            color: "#fff",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <SearchForm />;
    </div>
  );
};

export default MoviesPage;
