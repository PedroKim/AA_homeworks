class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups[0..5].each {|cup| 4.times { cup << :stone }}
    @cups[7..12].each {|cup| 4.times { cup << :stone }}
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' if start_pos < 0 || start_pos > 13
    raise 'Starting cup is empty' if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    current_cup = @cups[start_pos]
    other_cup_pos = start_pos + 1

    until current_cup.empty?
      if other_cup_pos == 6
        other_cup_pos += 1
      elsif other_cup_pos == 13
        other_cup_pos == 0
      end

        @cups[other_cup_pos] << current_cup.pop

        other_cup_pos += 1
    end

  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
