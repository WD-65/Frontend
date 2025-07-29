function Btn({ content, currentUrl, setUrl }) {
  return (
    <button
      onClick={() => setUrl(currentUrl)}
      disabled={!currentUrl}
      className={`px-4 py-2 rounded ${
        currentUrl
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
      }`}>
      {content}
    </button>
  );
}

export default Btn;
