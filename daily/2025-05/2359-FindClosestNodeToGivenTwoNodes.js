/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
const closestMeetingNode = function(edges, node1, node2) {
  let pathFromNode1 = Array(edges.length).fill(-1);
  let pathFromNode2 = Array(edges.length).fill(-1);
  let nextNodeIndex = edges[node1];
  let hopCount = 1;
  let maxDistanceToANode = Infinity;
  let resultIndex = -1;

  pathFromNode1[node1] = 0;
  while (nextNodeIndex !== -1 && pathFromNode1[nextNodeIndex] === -1) {
    pathFromNode1[nextNodeIndex] = hopCount;
    nextNodeIndex = edges[nextNodeIndex];
    if (nextNodeIndex === -1) break;
    hopCount++;
  }

  pathFromNode2[node2] = 0;
  nextNodeIndex = edges[node2];
  hopCount = 1;
  while (nextNodeIndex !== -1 && pathFromNode2[nextNodeIndex] === -1) {
    pathFromNode2[nextNodeIndex] = hopCount;
    nextNodeIndex = edges[nextNodeIndex];
    if (nextNodeIndex === -1) break;
    hopCount++;
  }
	
  for (let i = 0; i < edges.length; i++) {
    if (pathFromNode1[i] === -1 || pathFromNode2[i] === -1) continue;
    const maxDistanceToCurNode = Math.max(pathFromNode2[i],
        pathFromNode1[i]);
    if (maxDistanceToCurNode < maxDistanceToANode) {
      resultIndex = i;
      maxDistanceToANode = maxDistanceToCurNode;
    }
  }
  return resultIndex;
};