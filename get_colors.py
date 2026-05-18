import sys
from PIL import Image
from sklearn.cluster import KMeans
import numpy as np

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(int(rgb[0]), int(rgb[1]), int(rgb[2]))

def get_dominant_colors(image_path, k=5):
    img = Image.open(image_path)
    img = img.resize((150, 150))
    img = img.convert('RGB')
    data = np.array(img).reshape(-1, 3)
    
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(data)
    
    colors = kmeans.cluster_centers_
    labels = kmeans.labels_
    
    counts = np.bincount(labels)
    sorted_indices = np.argsort(counts)[::-1]
    
    print("Dominant colors:")
    for i in sorted_indices:
        color = colors[i]
        percentage = counts[i] / len(labels) * 100
        print(f"{rgb_to_hex(color)} ({percentage:.2f}%) - RGB: {color}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python get_colors.py <image_path>")
        sys.exit(1)
    get_dominant_colors(sys.argv[1], 8)
