require 'byebug'
class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end

end

def bfs(starting_node, target_value)
    queue = [starting_node]
    visited = Set.new()
    # debugger
    until queue.empty?
        node = queue.shift

        visited.add(node.val.to_sym)

        return node if node.val == target_value

        node.neighbors.each do |neighbor| 
            if !visited.include?(neighbor.val.to_sym)
                queue << neighbor 
            end
        end
    end

    nil
end