import useCartDialog from "../../../hooks/useCartDialog";

const CartDrawer = () => {
  const { closeDrawer } = useCartDialog();
  return (
    <div
      style={{ backgroundSize: "50%" }}
      className="w-2/5 h-full absolute right-0 top-0 bottom-0 z-[9999] bg-[url('bg/light.jpg')] dark:bg-[url('bg/dark.jpg')] shadow-[-5px_0_15px] shadow-slate-800/20 dark:shadow-amber-200/20 border-l border-slate-800/20 dark:border-amber-200/20"
    >
      <div className="w-full h-full bg-white/75 dark:bg-black/75 p-4">
        <button
          onClick={closeDrawer}
          className="size-10 flex items-center justify-center border-2 border-slate-900 dark:border-white rounded-full group hover:bg-slate-900 dark:hover:bg-white hover:text-slate-900 dark:hover:text-black absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="size-6 stroke-slate-900 dark:stroke-white group-hover:stroke-white dark:group-hover:stroke-slate-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold leading-10 mb-5">Cart</h1>
      </div>
    </div>
  );
};

export default CartDrawer;
