import fitz
from pathlib import Path

pdf_path = Path('public/ia-financial/GuillaumelogoFINAL.pdf')
output_path = pdf_path.parent / 'GuillaumelogoFINAL-1.png'
with fitz.open(pdf_path) as doc:
    page = doc[0]
    pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), alpha=False)
    pix.save(output_path)
print(output_path)
