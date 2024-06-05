export const cropImage = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    const size = Math.min(img.width, img.height);
                    canvas.width = size;
                    canvas.height = size;
                    const startX = (img.width - size) / 2;
                    const startY = (img.height - size) / 2;
                    ctx.drawImage(img, startX, startY, size, size, 0, 0, size, size);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error("Canvas is empty"));
                        }
                    }, "image/jpeg");
                } else {
                    reject(new Error("Could not get canvas context"));
                }
            };
            img.src = reader.result as string;
        };
        reader.onerror = () => {
            reject(new Error("Error reading file"));
        };
        reader.readAsDataURL(file);
    });
};
