import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {
  const { balance } = await getUserBalance();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{formatter.format(balance ?? 0)}</h1>
    </>
  );
};

export default Balance;
