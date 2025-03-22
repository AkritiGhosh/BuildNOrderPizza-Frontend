import PageLayout from "../../layout/PageLayout";
import Heading from "../../components/common/Heading";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <nav>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex w-auto gap-1 items-center py-0.5 px-1.5 rounded-md hover:bg-amber-100 dark:hover:bg-slate-800 text-amber-600 dark:text-slate-300 text-base hover:font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Back
        </button>
      </nav>
      <Heading>Cart</Heading>
    </PageLayout>
  );
};

export default CartPage;
