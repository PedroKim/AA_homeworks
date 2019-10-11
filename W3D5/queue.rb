class Queue
    def initialize
        @ivar = []
    end

    def enqueue(el)
        ivar << el
    end

    def dequeue
        ivar.shift
    end

    def peek
        ivar[-1]
    end
    
    private
    attr_reader :ivar
end
