function StatusMessage({ type, children }) {
  return <p className={type}>{children}</p>;
}

export default StatusMessage;
