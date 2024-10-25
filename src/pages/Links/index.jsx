import { useState, useEffect } from 'react';
import './Links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinkSave, deleteLink } from '../../services/store-links';
import Result from '../../components/Result';

export default function Links() {

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showResult, setShowResult] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave('@encurtaLink');
      setMyLinks(result);

      if (result.length === 0) {
        setEmptyList(true);
      }
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowResult(true);
  }

  async function handleDeleteLink(id) {
    const result = await deleteLink(myLinks, id);
    setMyLinks(result);
  }


  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='white' />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className='links-item'>
          <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map(link => (
        <div key={link.id} className='links-item'>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='white' />
            {link.long_url}
          </button>

          <button className='link-delete' onClick={() => handleDeleteLink(link.id)}>
            <FiTrash size={18} color='#ff5454' />
          </button>
        </div>
      ))}

      {showResult && (
        <Result
          closeResult={() => setShowResult(false)}
          content={data}
        />
      )}
    </div>
  );
}
