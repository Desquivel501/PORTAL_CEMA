const text =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed odio sit amet metus cursus malesuada sit amet vitae velit. Sed pulvinar molestie turpis, a efficitur velit. Mauris venenatis non sem a fringilla. Morbi interdum arcu a mi mollis convallis. Sed cursus leo vitae arcu egestas, ac finibus dui euismod. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet porta mauris, eget elementum nisl. In cursus, sem eget aliquet ornare, ligula tellus condimentum orci, ut placerat leo nibh ut mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus gravida justo vel quam fermentum cursus. Donec porttitor rhoncus elementum. Etiam eget mi mollis, pulvinar leo eget, aliquet eros.

Vestibulum aliquam purus non tortor eleifend, nec blandit lacus dictum. Donec tempus neque in nisi consequat aliquet. Etiam odio sapien, suscipit ut commodo nec, fermentum porta nisl. In finibus, elit in pellentesque pretium, dui tellus maximus est, et laoreet tortor arcu vitae neque. Curabitur vestibulum iaculis pretium. In non interdum elit. Vestibulum sit amet vestibulum nulla, eget sollicitudin nibh. Integer quam justo, tincidunt a mi faucibus, scelerisque vulputate purus. Maecenas nec malesuada purus. Proin porta, mauris eu fermentum luctus, risus odio rutrum lectus, ac condimentum risus nulla ut nibh. Cras in varius nisl. Nullam eu ipsum quis purus aliquam rhoncus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis malesuada sem dignissim turpis cursus vestibulum. Etiam a ipsum a magna ultrices laoreet. Integer sit amet vulputate leo. Vestibulum sed venenatis ex. Aliquam sed accumsan massa. Duis ex nisi, placerat non dignissim tincidunt, iaculis a odio. Quisque risus augue, imperdiet quis dui eget, dictum commodo mi. Sed rutrum lacus a vestibulum laoreet. Suspendisse orci est, condimentum nec sollicitudin a, consequat ut lorem. Etiam consectetur enim magna, quis sodales dui accumsan in. Cras ac purus vel tortor dignissim luctus vitae eu tortor. Nunc cursus, erat sed vestibulum faucibus, lacus neque dignissim nunc, in bibendum felis erat a urna. Donec eget semper neque, id congue purus.

Fusce ut faucibus arcu, ac porta mauris. Sed sollicitudin sapien vel sem porttitor vulputate. Quisque fermentum eleifend ante, a accumsan magna. Nullam eleifend iaculis sollicitudin. Suspendisse eu est vel metus imperdiet semper sollicitudin in tellus. In dolor est, sodales eu interdum vitae, ultrices ut mauris. Cras non augue varius neque imperdiet scelerisque. Praesent feugiat interdum lacus hendrerit porta. Praesent tristique erat eget ornare rutrum. Proin feugiat imperdiet sem, quis elementum lectus sollicitudin et. Fusce aliquam finibus leo vel tristique. Vivamus eu maximus leo. Aenean vestibulum ex odio, et volutpat arcu mattis nec. Curabitur non arcu rhoncus diam congue ultricies. Duis rutrum in arcu eget sodales.

Suspendisse ut feugiat augue, eget dapibus mi. In vel varius purus, eu volutpat neque. Cras suscipit sagittis est, ac egestas eros euismod at. Aliquam lectus sapien, fermentum egestas sapien sed, pellentesque malesuada lectus. Vivamus egestas molestie nunc. Mauris vehicula est dolor, id blandit mi aliquam quis. Aliquam a turpis et ante pharetra accumsan. Nam ac nisl consequat, luctus leo eget, gravida libero. Aenean nibh nisl, tristique vel nisi eu, posuere aliquam est. Curabitur eu hendrerit mauris. Nullam pretium, ipsum at hendrerit fermentum, turpis elit bibendum lorem, sit amet rutrum arcu nisl eu odio. Vivamus venenatis dolor vitae diam rhoncus, ut commodo sapien fermentum.`



export function getLoremIpsum(numParagraphs) {
    // Split the text into paragraphs based on newlines or double line breaks
    const paragraphs = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim() !== "");

    // If requested paragraphs exceed available ones, return all
    if (numParagraphs >= paragraphs.length) {
        return paragraphs.join("\n\n");
    }

    // Join and return the desired number of paragraphs
    return paragraphs.slice(0, numParagraphs).join("\n\n");
}