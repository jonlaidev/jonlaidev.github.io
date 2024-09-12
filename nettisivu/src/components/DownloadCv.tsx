import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadCv = () => {
  const handleDownload = async () => {
    const input = document.getElementById('cv-content');
    if (input) {
        const canvas = await html2canvas(input, { useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('cv.pdf');
      }
    };
  
    return (
      <button
        onClick={handleDownload}
        className="bg-red text-white px-4 py-2 rounded-md ml-auto hover:bg-gray"
      >
        Download CV
      </button>
    );
  };
  
  export default DownloadCv;