import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the metadata type name from command line arguments
const metadataType = process.argv[2];

// Check if metadata type name is provided
if (!metadataType) {
    console.error('Please provide a metadata type name');
    process.exit(1);
}

// Define the base directory
const baseDir = path.join(__dirname, 'lib', 'metadataTypeParsing', metadataType);

const structure =  [
    '',
    '__tests__',
    join('__tests__', 'mocks'),
    `${metadataType}.ts`,
    join('__tests__', `${metadataType}.test.ts`),
    join('__tests__', 'mocks', `${metadataType}Mock.ts`)
];

// Create the folders and files
structure.forEach((item) => {
    const itemPath = path.join(baseDir, item);
    const dir = path.extname(itemPath) ? path.dirname(itemPath) : itemPath;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (path.extname(itemPath) && !fs.existsSync(itemPath)) {
        fs.writeFileSync(itemPath, '');
    }
});

console.log(`Structure for '${metadataType}' created successfully`);
