### 组件介绍
**“数据生成”（Random Data）**控件根据用户配置生成数据集。

<hr/>

- 输入：
  - 无
- 输出：
  - data：数据集

<hr/>

### 页面介绍
点击**“数据生成”（Random Data）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/io/random-data/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>生成方法列表</td> 
      <td>
      指定生成规则，并配置规则信息，方便生成相应的数据
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数据规则</td>    
      <td>
      数据规则选项卡（包括：正态分布、伯努利分布、二项分布、连续型均与分布、离散型均匀分布、多项分布、超几何分布、负二项分布、泊松分布、指数分布、伽玛分布、Student-T 分布、二维正态分布）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>生成实例数</td>    
      <td>
      需要生成的数据实例数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
**“数据生成”（Random Data）**控件一般作为一个工作流的开端，生成并加载数据，之后进行相关处理。如下图所示的工作流中 ，使用**“数据生成”（Random Data）**控件生成数据集，连接**“查看数据”（Data Table）**控件查看数据。  
![workflow](/img/aistudio/io/random-data/workflow.png)

案例中使用默认配置生成数据集，案例中控件执行结果如下图所示：  
![workflow-result](/img/aistudio/io/random-data/workflow-result.png)
